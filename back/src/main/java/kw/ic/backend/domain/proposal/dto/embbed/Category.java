package kw.ic.backend.domain.proposal.dto.embbed;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Category {
    @JsonProperty("menuName")
    MENU_NAME,
    @JsonProperty("price")
    PRICE,
    @JsonProperty("closeTime")
    OPEN_TIME,
    @JsonProperty("openTime")
    CLOSE_TIME
}
