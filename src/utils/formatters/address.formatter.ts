export const formatAddress = (from = 'PP -- DD -- WW -- SS', to = 'WW', prefix = true): string => {
	const arr = from.split(' -- ')
	const province = arr[0] || ''
	const district = arr[1] || ''
	const ward = arr[2] || ''
	const street = arr[3] || ''

	let result = to.replace('PP', province).replace('DD', district).replace('WW', ward).replace('SS', street)

	if (!prefix) {
		result = result.replace('Tỉnh ', ' ').replace('Thành phố', 'TP.').replace('Huyện ', ' ').replace('Thị xã ', 'TX.').replace('Xã ', ' ').replace('Phường ', ' ')
	}

	return result
}

export const addressStringToObject = (address: string, pattern = 'PP -- DD -- WW -- SS') => {
	const arr = address.split(' -- ')
	return {
		province: arr[0] || '',
		district: arr[1] || '',
		ward: arr[2] || '',
		street: arr[3] || '',
	}
}

export const addressObjectToString = (obj: { province: string, district: string, ward: string, street: string }, pattern = 'PP -- DD -- WW -- SS') => {
	return pattern
		.replace('PP', obj.province)
		.replace('DD', obj.district)
		.replace('WW', obj.ward)
		.replace('SS', obj.street)
}
