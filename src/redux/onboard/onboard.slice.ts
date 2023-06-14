// import {RootState} from '@app/redux/store.redux';
import {Users} from '@app/entities/users';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface OnboardState {
  user: Users;
}

const initialState: OnboardState = {
  user: {
    idNumber: '',
    name: '',
    phoneNumber: '',
    birthday: '',
    email: '',
    purpose: [],
  },
};

export const onboardSlice = createSlice({
  name: 'onboard',
  initialState,
  reducers: {
    setBasicInfo: (state, action: PayloadAction<OnboardState>) => {
      state.user.name = action.payload.user.name;
      state.user.idNumber = action.payload.user.idNumber;
    },
    setAdditionalInfo: (state, action: PayloadAction<OnboardState>) => {
      state.user.phoneNumber = action.payload.user.phoneNumber;
      state.user.birthday = action.payload.user.birthday;
      state.user.email = action.payload.user.email;
    },
    setPurpose: (state, action: PayloadAction<OnboardState>) => {
      state.user.purpose = action.payload.user.purpose;
    },
    resetInformation: state => {
      state.user = initialState.user;
    },
  },
});

export const {setBasicInfo, setAdditionalInfo, setPurpose, resetInformation} =
  onboardSlice.actions;
export const selectSystem = (state: OnboardState) => state;

export default onboardSlice.reducer;
