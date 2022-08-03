// Generated by https://github.com/foxglove/schemas

import { SceneEntityDeletionType } from "./SceneEntityDeletionType";
import { Time } from "./Time";

/** Command to remove previously published entities */
export type SceneEntityDeletion = {
  /** Timestamp of the deletion. Only matching entities earlier than this timestamp will be deleted. */
  timestamp: Time;

  /** Type of deletion action to perform */
  type: SceneEntityDeletionType;

  /** Numeric identifier which must match if `kind` is `MATCHING_ID`. */
  id: string;
};
