package kw.ic.backend.domain.proposal.repository;

import kw.ic.backend.domain.proposal.Proposal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProposalRepository extends JpaRepository<Proposal,Long> {
}
