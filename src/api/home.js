import axios from 'common/js/http'

// 获取当前的联赛
export function getLeague(param) {
	const url = '/league/query_id'
	return axios.get(url, {
    params: {
      school_id: param
    }
  }).then((res) => {
      return Promise.resolve(res)
	})
}
