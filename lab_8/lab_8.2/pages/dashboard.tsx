import { GetServerSideProps } from "next";
import { User, Notification, getCurrentUser, getUserNotifications, getUserAnalytics } from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
}

export default function Dashboard({
  user,
  notifications,
  analytics,
  currentTime,
}: DashboardProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px", fontFamily: "Arial" }}>
      <h1>User Dashboard</h1>

      <section
        style={{
          marginBottom: "24px",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      >
        <h2>Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </section>

      <section
        style={{
          marginBottom: "24px",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      >
        <h2>Analytics</h2>
        <p><strong>Page Views:</strong> {analytics.pageViews.toLocaleString()}</p>
        <p><strong>Sessions:</strong> {analytics.sessions.toLocaleString()}</p>
        <p><strong>Bounce Rate:</strong> {analytics.bounceRate.toFixed(1)}%</p>
      </section>

      <section
        style={{
          marginBottom: "24px",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      >
        <h2>Notifications ({unreadCount} unread)</h2>
        <ul>
          {notifications.map((notif) => (
            <li key={notif.id} style={{ marginBottom: "10px" }}>
              <strong>[{notif.type}]</strong> {notif.message}{" "}
              {!notif.read ? "(Unread)" : "(Read)"}
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <p><strong>Last updated:</strong> {currentTime}</p>
      </footer>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const user = getCurrentUser();
  const notifications = await getUserNotifications(user.id);
  const analytics = await getUserAnalytics(user.id);

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};