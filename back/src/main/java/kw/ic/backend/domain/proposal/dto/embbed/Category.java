package kw.ic.backend.domain.proposal.dto.embbed;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public enum Category {
    @JsonProperty("menuName")
    MENU_NAME,
    @JsonProperty("price")
    PRICE,
    @JsonProperty("closeTime")
    OPEN_TIME,
    @JsonProperty("openTime")
    CLOSE_TIME;

    @JsonCreator
    public static Category from(String val) {
        for (Category category : Category.values()) {
            if (category.name().equals(val)) {
                return category;
            }
        }
        return null;
    }
}
