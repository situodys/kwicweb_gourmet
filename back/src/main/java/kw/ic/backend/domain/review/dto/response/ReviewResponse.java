package kw.ic.backend.domain.review.dto.response;

import java.util.List;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import kw.ic.backend.domain.member.dto.request.SimpleMemberResponse;
import kw.ic.backend.domain.restaurant.dto.response.RestaurantResponse;
import kw.ic.backend.domain.restaurant.dto.response.SimpleRestaurantResponse;
import kw.ic.backend.domain.restaurant.entity.Restaurant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewResponse {

    @NotNull
    private Long reviewId;

    @NotNull
    private String title;

    @NotNull
    private String content;

    @NotNull
    private Integer rating;

    @NotNull
    private SimpleMemberResponse simpleMemberResponse;

    @NotNull
    private SimpleRestaurantResponse simpleRestaurantResponse;

    @NotNull @NotEmpty
    private List<String> menus;
}
