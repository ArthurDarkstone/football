import axios from 'common/js/http'

// 获取排行榜
export function getRank(type,league) {
  let url = ''
  if (type === 'team_ranking') {
    url = `/grade/display_grade`
    return axios.get(url, {
      params: {
        league_id: league.league
      }
    }).then((res) => {
    	return Promise.resolve(res)
    })
  } else if (type === 'schedule') {
  	url = `/schedule/get_knockout_schedule`
    return axios.get(url, {
      params: {
        league_id: league.league
      }
    }).then((res) => {
    	return Promise.resolve(res)
    })
  } else if (type === 'group') {
  	url = `/group/get`
    return axios.get(url, {
      params: {
        league_id: league.league
      }
    }).then((res) => {
    	return Promise.resolve(res)
    })
  } else if (type === 'goal_ranking') {
    url = `/play_statistics/select`
    return axios.post(url, {
      select: '1',
      league_id: league.league
    }).then((res) => {
      return Promise.resolve(res)
    })
  } else if (type === 'yellow_ranking') {
    url = `/play_statistics/select`
    return axios.post(url, {
      select: '4',
      league_id: league.league
    }).then((res) => {
      return Promise.resolve(res)
    })
  } else if (type === 'red_ranking') {
    url = `/play_statistics/select`
    return axios.post(url, {
      select: '5',
      league_id: league.league
    }).then((res) => {
      return Promise.resolve(res)
    })
  }
}
