import jsonview from '@pgrabovets/json-view';
import TwinoidGoals from '../src';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.body.appendChild(rootDiv);

jsonview.renderJSON(TwinoidGoals, rootDiv);