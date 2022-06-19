/**
 * @license
 * 
 * 
 * 
 * 
 */

import { SignInContainer } from '../Support/Container';
import { FirstHalfColumn } from '../../components/Grid';
import { SupportDetails } from '../Support/Details';

export function Case() {
    return (
        <SignInContainer>
            <FirstHalfColumn>
                <SupportDetails />
            </FirstHalfColumn>
        </SignInContainer>
    )
}