
type Ward = {
	name: string
}

type District = {
	code: number
	name: string
	wards: Ward[]
}

type Province = {
	code: number
	name: string
	districts: District[]
}

class Address {
	data: Province[] = [
		{
			name: 'Thành phố Hà Nội',
			code: 1,
			districts: [],
		},
		{
			name: 'Tỉnh Hà Giang',
			code: 2,
			districts: [],
		},
		{
			name: 'Tỉnh Cao Bằng',
			code: 4,
			districts: [],
		},
		{
			name: 'Tỉnh Bắc Kạn',
			code: 6,
			districts: [],
		},
		{
			name: 'Tỉnh Tuyên Quang',
			code: 8,
			districts: [],
		},
		{
			name: 'Tỉnh Lào Cai',
			code: 10,
			districts: [],
		},
		{
			name: 'Tỉnh Điện Biên',
			code: 11,
			districts: [],
		},
		{
			name: 'Tỉnh Lai Châu',
			code: 12,
			districts: [],
		},
		{
			name: 'Tỉnh Sơn La',
			code: 14,
			districts: [],
		},
		{
			name: 'Tỉnh Yên Bái',
			code: 15,
			districts: [],
		},
		{
			name: 'Tỉnh Hoà Bình',
			code: 17,
			districts: [],
		},
		{
			name: 'Tỉnh Thái Nguyên',
			code: 19,
			districts: [],
		},
		{
			name: 'Tỉnh Lạng Sơn',
			code: 20,
			districts: [],
		},
		{
			name: 'Tỉnh Quảng Ninh',
			code: 22,
			districts: [],
		},
		{
			name: 'Tỉnh Bắc Giang',
			code: 24,
			districts: [],
		},
		{
			name: 'Tỉnh Phú Thọ',
			code: 25,
			districts: [],
		},
		{
			name: 'Tỉnh Vĩnh Phúc',
			code: 26,
			districts: [],
		},
		{
			name: 'Tỉnh Bắc Ninh',
			code: 27,
			districts: [],
		},
		{
			name: 'Tỉnh Hải Dương',
			code: 30,
			districts: [],
		},
		{
			name: 'Thành phố Hải Phòng',
			code: 31,
			districts: [],
		},
		{
			name: 'Tỉnh Hưng Yên',
			code: 33,
			districts: [],
		},
		{
			name: 'Tỉnh Thái Bình',
			code: 34,
			districts: [],
		},
		{
			name: 'Tỉnh Hà Nam',
			code: 35,
			districts: [],
		},
		{
			name: 'Tỉnh Nam Định',
			code: 36,
			districts: [],
		},
		{
			name: 'Tỉnh Ninh Bình',
			code: 37,
			districts: [],
		},
		{
			name: 'Tỉnh Thanh Hóa',
			code: 38,
			districts: [],
		},
		{
			name: 'Tỉnh Nghệ An',
			code: 40,
			districts: [],
		},
		{
			name: 'Tỉnh Hà Tĩnh',
			code: 42,
			districts: [],
		},
		{
			name: 'Tỉnh Quảng Bình',
			code: 44,
			districts: [],
		},
		{
			name: 'Tỉnh Quảng Trị',
			code: 45,
			districts: [],
		},
		{
			name: 'Tỉnh Thừa Thiên Huế',
			code: 46,
			districts: [],
		},
		{
			name: 'Thành phố Đà Nẵng',
			code: 48,
			districts: [],
		},
		{
			name: 'Tỉnh Quảng Nam',
			code: 49,
			districts: [],
		},
		{
			name: 'Tỉnh Quảng Ngãi',
			code: 51,
			districts: [],
		},
		{
			name: 'Tỉnh Bình Định',
			code: 52,
			districts: [],
		},
		{
			name: 'Tỉnh Phú Yên',
			code: 54,
			districts: [],
		},
		{
			name: 'Tỉnh Khánh Hòa',
			code: 56,
			districts: [],
		},
		{
			name: 'Tỉnh Ninh Thuận',
			code: 58,
			districts: [],
		},
		{
			name: 'Tỉnh Bình Thuận',
			code: 60,
			districts: [],
		},
		{
			name: 'Tỉnh Kon Tum',
			code: 62,
			districts: [],
		},
		{
			name: 'Tỉnh Gia Lai',
			code: 64,
			districts: [],
		},
		{
			name: 'Tỉnh Đắk Lắk',
			code: 66,
			districts: [],
		},
		{
			name: 'Tỉnh Đắk Nông',
			code: 67,
			districts: [],
		},
		{
			name: 'Tỉnh Lâm Đồng',
			code: 68,
			districts: [],
		},
		{
			name: 'Tỉnh Bình Phước',
			code: 70,
			districts: [],
		},
		{
			name: 'Tỉnh Tây Ninh',
			code: 72,
			districts: [],
		},
		{
			name: 'Tỉnh Bình Dương',
			code: 74,
			districts: [],
		},
		{
			name: 'Tỉnh Đồng Nai',
			code: 75,
			districts: [],
		},
		{
			name: 'Tỉnh Bà Rịa - Vũng Tàu',
			code: 77,
			districts: [],
		},
		{
			name: 'Thành phố Hồ Chí Minh',
			code: 79,
			districts: [],
		},
		{
			name: 'Tỉnh Long An',
			code: 80,
			districts: [],
		},
		{
			name: 'Tỉnh Tiền Giang',
			code: 82,
			districts: [],
		},
		{
			name: 'Tỉnh Bến Tre',
			code: 83,
			districts: [],
		},
		{
			name: 'Tỉnh Trà Vinh',
			code: 84,
			districts: [],
		},
		{
			name: 'Tỉnh Vĩnh Long',
			code: 86,
			districts: [],
		},
		{
			name: 'Tỉnh Đồng Tháp',
			code: 87,
			districts: [],
		},
		{
			name: 'Tỉnh An Giang',
			code: 89,
			districts: [],
		},
		{
			name: 'Tỉnh Kiên Giang',
			code: 91,
			districts: [],
		},
		{
			name: 'Thành phố Cần Thơ',
			code: 92,
			districts: [],
		},
		{
			name: 'Tỉnh Hậu Giang',
			code: 93,
			districts: [],
		},
		{
			name: 'Tỉnh Sóc Trăng',
			code: 94,
			districts: [],
		},
		{
			name: 'Tỉnh Bạc Liêu',
			code: 95,
			districts: [],
		},
		{
			name: 'Tỉnh Cà Mau',
			code: 96,
			districts: [],
		},
	]
	loadDistricts = false as any
	loadWards = false as any

	async fetchDistrictsByProvince(provinceName: string): Promise<District[]> {
		try {
			const province = this.data.find(item => item.name === provinceName)
			if (!province) throw new Error(`No exists province: ${provinceName}`)
			if (province.districts.length === 0) {
				if (this.loadDistricts === false) {
					this.loadDistricts = await fetch(`https://provinces.open-api.vn/api/p/${province.code}?depth=2`)
				}
				const response = await this.loadDistricts.json()
				province.districts = response.districts
				this.loadDistricts = false
			}
			return province.districts
		} catch (error) {
			return []
		}
	}

	async fetchWardsByProvinceAndDistrict(provinceName: string, districtName: string): Promise<Ward[]> {
		try {
			const districts = await this.fetchDistrictsByProvince(provinceName)
			const district = districts.find(item => item.name === districtName)
			if (!district) throw new Error(`No exists district: ${districtName}`)
			if (district.wards.length === 0) {
				if (this.loadWards === false) {
					this.loadWards = await fetch(`https://provinces.open-api.vn/api/d/${district.code}?depth=2`)
				}
				const response = await this.loadWards.json()
				district.wards = await response.wards
				this.loadWards = false
			}
			return district.wards
		} catch (error) {
			return []
		}
	}

	getAllProvinces(): string[] {
		return this.data.map(item => item.name).sort()
	}

	async getDistrictsByProvince(provinceName: string): Promise<string[]> {
		const data = await this.fetchDistrictsByProvince(provinceName)
		return data.map(item => item.name).sort()
	}

	async getWardsByProvinceAndDistrict(provinceName: string, districtName: string): Promise<string[]> {
		const data = await this.fetchWardsByProvinceAndDistrict(provinceName, districtName)
		return data.map(item => item.name).sort()
	}
}

const AddressService = new Address()

export default AddressService
