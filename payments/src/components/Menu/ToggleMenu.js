import { useAuth0 } from '@auth0/auth0-react';

export const ToggleMenu = () => {
    const { user } = useAuth0();

    return (
        <div className="btn-menu">
            <img src={user.picture} alt="imagen de usuario" />
        </div>
    )
}
