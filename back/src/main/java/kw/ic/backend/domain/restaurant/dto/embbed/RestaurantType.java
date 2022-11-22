package kw.ic.backend.domain.restaurant.dto.embbed;

import lombok.Getter;

@Getter
public enum RestaurantType {
    KOREAN("한식"),
    JAPANESE("일식"),
    CHINESE("중식"),
    WESTERN("양식");

    private String value;

    RestaurantType(String value) {
        this.value = value;
    }
}
