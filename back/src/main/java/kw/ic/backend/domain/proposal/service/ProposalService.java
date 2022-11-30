package kw.ic.backend.domain.proposal.service;

import java.util.stream.Collectors;
import kw.ic.backend.domain.member.repository.MemberRepository;
import kw.ic.backend.domain.proposal.Proposal;
import kw.ic.backend.domain.proposal.dto.request.ProposalPageRequest;
import kw.ic.backend.domain.proposal.dto.request.ProposalRequest;
import kw.ic.backend.domain.proposal.dto.response.ProposalPageResponse;
import kw.ic.backend.domain.proposal.dto.response.ProposalResponse;
import kw.ic.backend.domain.proposal.repository.ProposalRepository;
import kw.ic.backend.domain.restaurant.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProposalService {

    private final ProposalRepository proposalRepository;
    private final MemberRepository memberRepository;
    private final RestaurantRepository restaurantRepository;

    public ProposalPageResponse findProposals(ProposalPageRequest request) {

        Page<ProposalResponse> result = proposalRepository.findProposals(request)
                .map(proposal -> ProposalResponse.builder()
                        .proposalId(proposal.getId())
                        .title(proposal.getTitle())
                        .category(proposal.getCategory())
                        .content(proposal.getContent())
                        .status(proposal.getStatus())
                        .memberId(proposal.getMember().getId())
                        .restaurantId(proposal.getRestaurant().getId())
                        .build()
                );

        return new ProposalPageResponse(result);
    }

    public Long register(ProposalRequest request) {
        Proposal proposal = proposalRepository.save(request.toProposal(
                restaurantRepository.getReferenceById(request.getMemberId()),
                memberRepository.getReferenceById(request.getMemberId())));

        return proposal.getId();
    }

    public Long delete(Long proposalId) {

        proposalRepository.deleteById(proposalId);

        return proposalId;
    }
}
