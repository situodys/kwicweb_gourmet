package kw.ic.backend.domain.notification.service;

import kw.ic.backend.domain.notification.Notification;
import kw.ic.backend.domain.notification.dto.request.NotificationPageRequest;
import kw.ic.backend.domain.notification.dto.request.NotificationRequest;
import kw.ic.backend.domain.notification.dto.response.NotificationPageResponse;
import kw.ic.backend.domain.notification.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository notificationRepository;

    public NotificationPageResponse findNotifications(NotificationPageRequest request) {
        return null;
    }

    public Long register(NotificationRequest request) {
        Notification notification = notificationRepository.save(request.toNotification());

        return notification.getId();
    }

    public Long delete(Long notificationId) {
        notificationRepository.deleteById(notificationId);

        return notificationId;
    }
}
