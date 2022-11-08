package kw.ic.backend.domain.proposal;

import kw.ic.backend.domain.restaurant.core.Restaurant;
import kw.ic.backend.domain.proposal.embbed.Category;
import kw.ic.backend.domain.member.Member;
import kw.ic.backend.global.BaseEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.util.Assert;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Proposal extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Category category;

    @Column(nullable = false)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder
    public Proposal(Category category, String content, Restaurant restaurant, Member member) {
        Assert.notNull(category, "category must not be empty");
        Assert.hasText(content, "requestContent must not be empty");

        this.category = category;
        this.content = content;
        this.restaurant = restaurant;
        this.member = member;
    }
}
