import { Octokit } from "@octokit/core";

import { octokitRenameBranch } from "./rename-branch";
import { VERSION } from "./version";

/**
 * @param octokit Octokit instance
 */
export function renameBranch(octokit: Octokit) {
  octokit.renameBranch = octokitRenameBranch.bind(null, octokit);
}

renameBranch.VERSION = VERSION;
