package kw.ic.backend.domain.proposal.dto.request;

import javax.validation.constraints.NotNull;
import kw.ic.backend.domain.member.Member;
import kw.ic.backend.domain.proposal.Proposal;
import kw.ic.backend.domain.proposal.dto.embbed.Category;
import kw.ic.backend.domain.restaurant.entity.Restaurant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProposalRequest {

    private Category category;

    @NotNull
    private String content;

    @NotNull
    private Long restaurantId;

    @NotNull
    private Long memberId;

    public Proposal toProposal(Restaurant restaurant, Member member) {
        return Proposal.builder()
                .category(this.category)
                .content(this.content)
                .restaurant(restaurant)
                .member(member)
                .build();
    }
}
