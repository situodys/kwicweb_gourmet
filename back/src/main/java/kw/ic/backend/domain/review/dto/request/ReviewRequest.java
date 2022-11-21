package kw.ic.backend.domain.review.dto.request;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import kw.ic.backend.domain.member.Member;
import kw.ic.backend.domain.menu.ReviewedMenu;
import kw.ic.backend.domain.restaurant.entity.Restaurant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewRequest {

    @NotNull
    private String title;

    @NotNull
    private String content;

    @NotNull
    private Integer rating;

    @NotNull
    private Long memberId;

    @NotNull
    private Long restaurantId;

    @NotNull @NotEmpty
    private List<Long> menuIds;
}
