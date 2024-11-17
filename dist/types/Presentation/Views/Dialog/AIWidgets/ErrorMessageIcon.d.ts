type ErrorDescription = {
    title: string;
    action: () => void;
};
type ErrorMessageIconProps = {
    errorMessageText: string;
    errorsDescriptions?: ErrorDescription[];
};
declare function ErrorMessageIcon({ errorMessageText, errorsDescriptions, }: ErrorMessageIconProps): import("react/jsx-runtime").JSX.Element;
export default ErrorMessageIcon;
