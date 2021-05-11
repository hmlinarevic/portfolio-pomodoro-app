import * as model from './model.js';
import modalView from './views/modalView.js';
import overlayView from './views/overlayView.js';
import timerDisplayView from './views/TimerDisplayView.js';
import timerButtonsView from './views/TimerButtonsView.js';

// timer
const controlTimerData = data => {
	timerDisplayView.render(data);
};

const controlStartClick = () => {
	model.startTimer(controlTimerData);
	timerButtonsView.updateMarkup(model.state.timer.isOn);
};

const controlStopClick = () => {
	model.stopTimer(controlTimerData);
	timerButtonsView.updateMarkup(model.state.timer.isOn);
};

const controlOptionsClick = () => {
	overlayView.on();
};

const controlOverlayClick = () => {
	overlayView.off();
	modalView.hideModal();
};

export const init = () => {
	timerDisplayView.render(undefined, model.state.timer.formatedInterval);
	overlayView.addHandler(controlOverlayClick);
	timerButtonsView.addHandler(
		controlStartClick,
		controlStopClick,
		controlOptionsClick
	);
};

// initial page load

// TO DO
// extract this to loadingView
export const loadScreen = () => {
	const loadingScreen = document.querySelector('.loading-screen');
	const loadingScreenAvatar = document.querySelector('.loading-screen__avatar');

	loadingScreenAvatar.classList.add('visible');

	setTimeout(() => {
		loadingScreenAvatar.classList.remove('visible');
		loadingScreenAvatar.classList.add('hidden');
	}, 2000);

	setTimeout(() => {
		loadingScreen.classList.add('hidden');
	}, 2500);

	setTimeout(() => {
		loadingScreen.style.display = 'none';
		document.body.style.overflow = 'unset';
	}, 2750);
};
