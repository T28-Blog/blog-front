//현재 시간을 UTC로 바꾸거나
//UTC 시간으로 저장되어 있는 데이터를 현재 시간(날짜)로 바꿔서 return

const timeChanger = {
  nowTOutc: () => {
    const date = new Date();
    const utc = date.valueOf();
    return utc.toString();
  },
  utcTOnow: (utc) => {
    const now = new Date(+utc);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate() < 10 ? `0${now.getDate()}` : `${now.getDate()}`;
    return `${months[month]}. ${date} ${year}`;
  },
};

export default timeChanger;
