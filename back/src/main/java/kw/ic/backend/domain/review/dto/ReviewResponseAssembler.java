package kw.ic.backend.domain.review.dto;

import java.util.stream.Collectors;
import kw.ic.backend.domain.menu.ReviewedMenu;
import kw.ic.backend.domain.restaurant.dto.RestaurantResponseAssembler;
import kw.ic.backend.domain.review.dto.response.ReviewResponse;
import kw.ic.backend.domain.review.entity.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ReviewResponseAssembler {

    private static final int GRADE_START_INDEX=0;
    private static final int GRADE_END_INDEX=5;

    private final RestaurantResponseAssembler restaurantResponseAssembler;

    public ReviewResponse reviewResponse(final Review review) {
        return new ReviewResponse(
                review.getId(),
                review.getTitle(),
                review.getContent(),
                review.getRating(),
                review.getMember().getEmail().substring(GRADE_START_INDEX, GRADE_END_INDEX),
                restaurantResponseAssembler.simpleRestaurantResponse(review.getRestaurant()),
                review.getReviewedMenus().stream()
                        .map(ReviewedMenu::getMenuName)
                        .collect(Collectors.toUnmodifiableList())
        );
    }
}
