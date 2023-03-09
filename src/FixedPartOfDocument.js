import { STICKY_ROOT_ID } from './MainContent';

export const FixedPartOfDocument = ({children}) => {
    return (
        <div className="fixed" id={STICKY_ROOT_ID}>
            {children}
        </div>
    )
}