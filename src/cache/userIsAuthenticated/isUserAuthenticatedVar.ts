import { makeVar } from "@apollo/client";

export const isUserAuthenticatedVar = makeVar<Boolean>(false);