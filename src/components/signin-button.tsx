import { Button } from "./ui/button";
import { signinUserAction } from "@/actions/signin-user-action";

export const SigninButton = () => {
    return (
        <form action={signinUserAction}>
            <Button type="submit" size={"sm"}>
                Signin
            </Button>
        </form>
    );
};
