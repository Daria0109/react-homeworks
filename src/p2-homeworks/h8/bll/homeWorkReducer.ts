import {InitialPeopleType} from '../HW8';

type SortPeopleType = {
  type: "sort"
  payload: "up" | "down"
}
type CheckPeopleType= {
  type: "check"
  payload: number
}
type ActionType = SortPeopleType | CheckPeopleType

export const homeWorkReducer = (state: InitialPeopleType, action: ActionType): InitialPeopleType => {
  switch (action.type) {
    case "sort":
      if (action.payload === "up") {
        return [...state].sort((a, b): number => {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        })
      }

      if (action.payload === "down") {
        return [...state].sort((a, b): number => {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
          if (x > y) {
            return -1;
          }
          if (x < y) {
            return 1;
          }
          return 0;
        })
      }

    case "check":
            return state.filter(x => x.age >= action.payload)

    default: return state
  }
};