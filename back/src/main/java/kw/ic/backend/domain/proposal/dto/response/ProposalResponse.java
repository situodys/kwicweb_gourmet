package kw.ic.backend.domain.proposal.dto.response;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import kw.ic.backend.domain.member.Member;
import kw.ic.backend.domain.proposal.dto.embbed.Category;
import kw.ic.backend.domain.restaurant.entity.Restaurant;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Getter
@NoArgsConstructor
public class ProposalResponse {

    private Long proposalId;

    private Category category;

    private String content;

    private Long restaurantId;

    private Long memberId;

    @Builder
    public ProposalResponse(Long proposalId, Category category, String content, Long restaurantId, Long memberId) {
        this.proposalId = proposalId;
        this.category = category;
        this.content = content;
        this.restaurantId = restaurantId;
        this.memberId = memberId;
    }
}
