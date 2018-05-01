//import する時はjsの中で定義されている関数名でimportすれば安心。
import {orientation} from './modules/windowOrientation';
import {sentenceMove} from './modules/sentenceMove';
import {modalAction} from './modules/modalAction';
window.onload = () => {
	orientation();
	sentenceMove();
	console.log(modalAction);
}
