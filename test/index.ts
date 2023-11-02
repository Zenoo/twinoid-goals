import jsonview from '@pgrabovets/json-view';
import TwinoidGoals from '../src';

const [body] = document.getElementsByTagName('BODY');
const rootDiv = document.createElement('div');
rootDiv.id = 'root';
body.appendChild(rootDiv);

jsonview.renderJSON(TwinoidGoals, rootDiv);