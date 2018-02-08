import Ractive from 'ractive';
import apptemplate from 'apptemplate';
import slider from 'slider';
import button from 'button';

Ractive.DEBUG = false;

var Slider = Ractive.extend({
	isolated: true,
	template: `${slider.sliderComponent}`
});

var Button = Ractive.extend({
	isolated: true,
	template: `${button.buttonComponent}`,
	changeMessage: () => {
		ractive.set('message', 'Whoop! Whoop!');
	}
});

var ractive = new Ractive({
	el: '#app',
	template: `${apptemplate.appTemplate}`,
	data: {
		label: 'This totally works',
		message: 'Change me!'
	},
	components: {
	    uiSlider: Slider,
	    uiButton: Button
  }
});


// console.log(ractive.toHTML());
