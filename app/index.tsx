import { ReactElement, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales.ko = {
  monthNames: [
    "01월",
    "02월",
    "03월",
    "04월",
    "08월",
    "06월",
    "07월",
    "08월",
    "09월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "01월",
    "02월",
    "03월",
    "04월",
    "08월",
    "06월",
    "07월",
    "08월",
    "09월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘",
};
LocaleConfig.defaultLocale = "ko";

export const RangeCalendar = (): ReactElement => {
  return (
    <View>
      <View style={styles.namesList}>
        <Text
          style={[
            styles.nameButton,
            { backgroundColor: "#ff0000", color: "#ffffff" },
          ]}
        >
          이수현
        </Text>
        <Text
          style={[
            styles.nameButton,
            { backgroundColor: "#0000ff", color: "#ffffff" },
          ]}
        >
          김민석
        </Text>
        <Text style={[styles.nameButton, { backgroundColor: "#00ff00" }]}>
          장기하
        </Text>
        <Text style={[styles.nameButton, { backgroundColor: "#f0f000" }]}>
          권남숙
        </Text>
      </View>
      <Calendar
        // 처음에 보이는 달. 기본값 = now
        //initialDate={'2024-08-01'}
        // 선택할 수 있는 최소 날짜, minDate 이전의 날짜는 회색으로 표시됩니다. 기본값 = undefined
        //minDate={"2024-08-01"}
        // 선택할 수 있는 최대 날짜, maxDate 이후의 날짜는 회색으로 표시됩니다. 기본값 = undefined
        //maxDate={"2024-08-30"}
        // 주간 프레스에서 실행되는 핸들러. 기본값 = undefined
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        // 길게 누르면 실행되는 핸들러. 기본값 = undefined
        onDayLongPress={(day) => {
          console.log("selected day", day);
        }}
        // 달력 제목의 월 형식. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={"yyyy MM"}
        // 달력에서 보이는 달이 바뀔 때 실행되는 핸들러. 기본값 = undefined
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        // 월 내비게이션 화살표 숨기기. 기본값 = false
        hideArrows={false}
        // 기본 화살표를 사용자 지정 화살표로 바꾸세요 (방향은 'left' 또는 'right'일 수 있습니다)
        //renderArrow={(direction) => <Arrow />}
        // 월 페이지에 다른 달의 날짜를 표시하지 마세요. 기본값 = false
        hideExtraDays={false}
        // hideArrows = false와 hideExtraDays = false인 경우 회색을 탭할 때 월을 전환하지 마세요.
        // 달력 페이지에 보이는 다른 달의 날. 기본값 = false
        disableMonthChange={false}
        // 첫 번째 날=1주가 월요일부터 시작한다면. dayNames와 dayNamesShort는 여전히 일요일부터 시작해야 합니다.
        firstDay={1}
        // 날짜 이름을 숨기세요. 기본값 = false
        hideDayNames={false}
        // 주 번호를 왼쪽에 표시하세요. 기본값 = false
        showWeekNumbers={false}
        // 왼쪽화살표 아이콘을 누르면 실행되는 핸들러. It receive a callback can go back month
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // 오른쪽화살표 아이콘을 누를 때 실행되는 핸들러. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // 왼쪽 화살표를 비활성화하세요. 기본값 = false
        disableArrowLeft={false}
        // 오른쪽 화살표를 비활성화하세요. 기본값 = false
        disableArrowRight={false}
        // 비활성화된 날짜에 대한 모든 터치 이벤트를 비활성화하십시오. markedDates에서 disableTouchEvent로 재정의할 수 있습니다.
        disableAllTouchEventsForDisabledDays={true}
        // 기본 월 및 연도 제목을 사용자 지정 제목으로 바꾸세요. 함수는 날짜를 매개 변수로 받습니다.
        renderHeader={(date) => {
          /*Return JSX*/
        }}
        // 몇 달 사이에 스와이프할 수 있는 옵션을 활성화하세요. 기본값 = false
        enableSwipeMonths={true}
        markingType="multi-period"
        markedDates={{
          "2024-08-14": {
            periods: [{ color: "#ff0000" }, { color: "#0000ff" }],
          },
          "2024-08-15": {
            periods: [{ color: "#ff0000" }, { color: "#0000ff" }],
          },
          "2024-08-16": {
            periods: [{ color: "transparent" }, { color: "transparent" }],
          },
          "2024-08-17": {
            periods: [{ color: "transparent" }, { color: "#0000ff" }],
          },
          "2024-08-18": {
            periods: [{ color: "#0000ff" }, { color: "#ff0000" }],
          },
          "2024-08-19": {
            periods: [{ color: "#ff0000" }, { color: "#0000ff" }],
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  namesList: {
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  nameButton: {
    paddingHorizontal: 5,
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 3,
  },
});
export default RangeCalendar;
