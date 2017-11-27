/**
 * Created by jorgeiten on 22/11/17.
 */
import numeral from "numeral";

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay  ${courseValue} from this awesome course!`); //eslint-disable-line no-console

