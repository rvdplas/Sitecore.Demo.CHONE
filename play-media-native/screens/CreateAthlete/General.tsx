import { useState } from "react";
import { View, TextInput } from "react-native";
import { Text } from "react-native-paper";
import { DatePicker } from "../../components/DatePicker/DatePicker";
import { SportPicker } from "../../features/SportPicker/SportPicker";
import { getDate } from "../../helpers/dateHelper";
import { Sport } from "../../interfaces/sport";
import { theme } from "../../theme/theme";
import { athleteStyles } from "./styles";

type GeneralProps = {
  sports: Sport[];
};

export const General = ({ sports }: GeneralProps) => {
  const [name, handleChangeName] = useState("");
  const [nationality, handleChangeNationality] = useState("");
  const [birthDate, handleChangeBirthDate] = useState(new Date());
  const [showBirthDatePicker, setShowBirthDatePicker] = useState(false);

  return (
    <View style={{ marginTop: theme.spacing.lg }}>
      <Text style={athleteStyles.label}>Athlete name</Text>
      <TextInput
        style={athleteStyles.textInput}
        onChangeText={handleChangeName}
        value={name}
      />
      <Text style={athleteStyles.label}>Nationality</Text>
      <TextInput
        style={athleteStyles.textInput}
        onChangeText={handleChangeNationality}
        value={nationality}
      />
      <Text style={athleteStyles.label}>Birth date</Text>
      <TextInput
        style={athleteStyles.textInput}
        onTouchStart={() => setShowBirthDatePicker(true)}
        value={getDate(birthDate)}
        showSoftInputOnFocus={false}
        caretHidden={true}
      />
      {showBirthDatePicker && (
        <DatePicker
          value={birthDate}
          visible={showBirthDatePicker}
          onChange={handleChangeBirthDate}
          onClose={setShowBirthDatePicker}
        />
      )}
      <SportPicker sports={sports} />
    </View>
  );
};
