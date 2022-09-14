import { render, screen, fireEvent } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { useSession, signIn } from "next-auth/client";
import { SubscribeButton } from ".";
import { useRouter } from "next/router";

jest.mock("next-auth/client");
jest.mock("next/router");

describe("SubscribeButton Component", () => {
  it("should render correctly when is not authenticated", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);


    render(<SubscribeButton />);

    expect(screen.getByText("Subscribe now")).toBeInTheDocument();
  });

  it("should be redirects user to sign in when isn't authenticated", () => {
    const signInMocked = mocked(signIn);
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });

  it("redirects to post when user already has a subscription", () => {
    const useRouterMocked = mocked(useRouter);
    const useSessionMocked = mocked(useSession);
    const pushMock = jest.fn();

    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: "John Doe", email: "jdoe@example.com" },
        activeSubscription: 'fake-active-subscription',
        expires: "fake-expires",
      },
      false,
    ]);

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(pushMock).toHaveBeenCalledWith('/posts');
  });
});
