import Node from '@/util/node';

type TraverseOnPath = (node: Node) => number;
interface TraverseHooks {
  pre?: TraverseOnPath;
  post?: TraverseOnPath;
}

/**
 * # question:
 *
 * # thinking:
 *  - traverse the tree with the for loop / flatMap
 *  - leave preorder, postorder hook for doing some operations
 *  - in this case, we put every node on the path to the leaf node, then traverse the invisitn nodes.
 *  - so, we use the preorder hook to put the node value first before find the next child.
 *
 * # complexity:
 *  - time:  O(n)
 *  - space: O(n)
 */
function traverseWith({ pre, post }: TraverseHooks) {
  const runHook =
    (mapper: TraverseOnPath | undefined) => (node: Node, result: number[]) => {
      const resultOfHook = mapper?.(node);
      if (resultOfHook || resultOfHook === 0) {
        result.push(resultOfHook);
      }
    };

  const preorderHook = runHook(pre);
  const postorderHook = runHook(post);

  const traverse = (node: Node | null): number[] => {
    const valuesOnPath: number[] = [];
    if (!node) return valuesOnPath;

    preorderHook(node, valuesOnPath);

    if (node.children.length === 0) return valuesOnPath;
    valuesOnPath.push(...node.children.flatMap(traverse));

    postorderHook(node, valuesOnPath);

    return valuesOnPath;
  };
  return { traverse };
}

function preorder(root: Node | null): number[] {
  return traverseWith({ pre: (node) => node.val }).traverse(root);
}

export default preorder;
