import { CipherResponse } from './cipherResponse';
import { CollectionDetailsResponse } from './collectionResponse';
import { DomainsResponse } from './domainsResponse';
import { FolderResponse } from './folderResponse';
import { ProfileResponse } from './profileResponse';

export class SyncResponse {
    profile?: ProfileResponse;
    folders: FolderResponse[] = [];
    collections: CollectionDetailsResponse[] = [];
    ciphers: CipherResponse[] = [];
    domains?: DomainsResponse;

    constructor(response: any) {
        if (response.Profile) {
            this.profile = new ProfileResponse(response.Profile);
        }

        if (response.Folders) {
            response.Folders.forEach((folder: any) => {
                this.folders.push(new FolderResponse(folder));
            });
        }

        if (response.Collections) {
            response.Collections.forEach((collection: any) => {
                this.collections.push(new CollectionDetailsResponse(collection));
            });
        }

        if (response.Ciphers) {
            response.Ciphers.forEach((cipher: any) => {
                this.ciphers.push(new CipherResponse(cipher));
            });
        }

        if (response.Domains) {
            this.domains = new DomainsResponse(response.Domains);
        }
    }
}
