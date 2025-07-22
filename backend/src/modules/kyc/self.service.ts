import { Injectable } from '@nestjs/common';
import { SelfBackendVerifier, getUserIdentifier } from '@selfxyz/core';
import { LoggerService, secrets } from '../common';

@Injectable()
export class SelfService {
    private verifier: SelfBackendVerifier;

    public constructor(private readonly logger: LoggerService) {
        this.verifier = new SelfBackendVerifier(
            secrets.SELF_APP_SCOPE, // the scope that you chose to identify your app
            secrets.SELF_API_ENDPOINT, // The API endpoint of this backend
            'hex',
            true,
        );
    }

    // To verify proofs, call the verify method.
    async verify(props: { proof: string; publicSignals: string }) {
        this.logger.info('Verifying user credential using self protocol');
        if (!props.proof || !props.publicSignals) {
            throw new Error('Proof and signal required');
        }

        // Extract user ID from the proof
        const userId = await getUserIdentifier(props.publicSignals);
        this.logger.info('Extracted userId:' + userId);

        // Verify the proof
        const result = await this.verifier.verify(
            props.proof,
            props.publicSignals,
        );

        if (!result.isValid) {
            throw new Error(JSON.stringify(result.isValidDetails));
        }

        return result.credentialSubject;
    }
}
