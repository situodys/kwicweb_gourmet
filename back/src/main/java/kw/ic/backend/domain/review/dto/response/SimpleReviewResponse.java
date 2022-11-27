package kw.ic.backend.domain.review.dto.response;

import java.util.List;
import javax.validation.constraints.NotNull;
import kw.ic.backend.domain.restaurant.dto.response.SimpleRestaurantResponse;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SimpleReviewResponse {

    @NotNull
    private Long reviewId;

    @NotNull
    private String title;

    @NotNull
    private String content;

    @NotNull
    private Integer rating;

    @NotNull
    private String emailPrefix;

    @NotNull
    private List<String> menus;

    @Builder
    public SimpleReviewResponse(Long reviewId,String title, String content, Integer rating, String emailPrefix,
                                List<String> menus) {
        this.reviewId = reviewId;
        this.title = title;
        this.content = content;
        this.rating = rating;
        this.emailPrefix = emailPrefix;
        this.menus = menus;
    }
}
