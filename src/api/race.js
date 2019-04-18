import axios from 'common/js/http'

// 获取赛事
export function getRace(params) {
	const url = '/schedule/select'
	return axios.post(url, {
		...params
	}).then((res) => {
      return Promise.resolve(res)
	})
}

export function getDetail(param) {
	const url = '/schedule/schedule_detail'
	return axios.get(url, {
		params: {
			schedule_id: param
		}
	}).then((res) => {
		return Promise.resolve(res)
	})
}
