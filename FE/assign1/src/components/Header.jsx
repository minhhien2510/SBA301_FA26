import { useNavigate } from "react-router-dom";
import { Navbar, Container, Dropdown, Badge } from "react-bootstrap";
import "./Header.css";

export default function Header() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("role");
        navigate("/");
    };

    const currentTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    return (
        <Navbar bg="light" sticky="top" className="shadow-sm header-navbar">
            <Container fluid className="px-4">
                {/* Left - Branding */}
                <Navbar.Brand className="d-flex align-items-center gap-3">
                    <div className="header-brand-icon"></div>
                    <div>
                        <div className="header-brand-title">FUNews Management</div>
                        <div className="header-brand-subtitle">Admin Control Panel</div>
                    </div>
                </Navbar.Brand>

                {/* Right - User Actions */}
                <div className="d-flex align-items-center gap-4 ms-auto">
                    {/* Time & Status */}
                    <div className="text-end border-end pe-4">
                        <div className="text-sm fw-semibold text-dark">{currentTime}</div>
                        <div className="text-xs fw-medium text-success d-flex align-items-center justify-content-end gap-1 mt-1">
                            <span className="status-indicator"></span>
                            Online
                        </div>
                    </div>

                    {/* User Dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="light"
                            id="user-dropdown"
                            className="d-flex align-items-center gap-2 p-2 border-0"
                        >
                            <div className="user-avatar">A</div>
                            <div className="d-none d-sm-block text-start">
                                <div className="fw-semibold text-dark small">Admin</div>
                                <div className="text-secondary" style={{ fontSize: "0.75rem" }}>
                                    Administrator
                                </div>
                            </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end" className="user-dropdown-menu">
                            {/* User Info */}
                            <div className="p-3 bg-light border-bottom">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="user-avatar">A</div>
                                    <div>
                                        <div className="fw-semibold text-dark small">Admin User</div>
                                        <div className="text-secondary" style={{ fontSize: "0.75rem" }}>
                                            admin@funews.com
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Menu Items */}
                            <Dropdown.Item href="#profile">
                                📋 Profile
                            </Dropdown.Item>
                            <Dropdown.Item href="#preferences">
                                ⚙️ Preferences
                            </Dropdown.Item>
                            <Dropdown.Divider />

                            {/* Logout */}
                            <Dropdown.Item onClick={logout} className="text-danger fw-semibold">
                                🚪 Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Container>
        </Navbar>
    );
}

