import { generateRandomNumber } from "./utilis";

const FunComponent = () => {
    return (
        <div>
            {isDataEven() && "Što je danas lijepi dan!"}
            {!isDataEven() && generateRandomNumber(1,100)}
        </div>
    )
}

export default FunComponent;