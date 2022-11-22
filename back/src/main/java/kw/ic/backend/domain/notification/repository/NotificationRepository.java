package kw.ic.backend.domain.notification.repository;

import kw.ic.backend.domain.notification.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification,Long> {
}
