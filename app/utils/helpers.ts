import { HttpHeaders } from "@angular/common/http";

export function getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return headers;
}
