export function registerDirective(app: any) {
	app.directive('click-outside', {
		beforeMount(el: any, binding: any, vnode: any) {
			el.clickOutsideEvent = (event: Event) => {
				if (!(el === event.target || el.contains(event.target))) {
					binding.value(event, el)
				}
			}
			document.body.addEventListener('click', el.clickOutsideEvent)
		},
		unmounted(el: any) {
			document.body.removeEventListener('click', el.clickOutsideEvent)
		},
	})
}
