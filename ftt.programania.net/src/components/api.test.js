import {groupContentQuery} from "./api";

test("si se mete un grupo la url contiene el grupo", () => {

  expect(groupContentQuery().url).toBe("bla bla bla");

});
