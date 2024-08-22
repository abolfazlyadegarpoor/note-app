import { http, HttpResponse } from "msw";

const users = [
  {
    name: "saheb",
    id: 1,
  },
  {
    name: "mohammadi",
    id: 2,
  },
];
export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json(users);
  }),
];
