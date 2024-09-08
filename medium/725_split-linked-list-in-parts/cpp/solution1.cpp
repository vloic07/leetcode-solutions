/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    vector<ListNode*> splitListToParts(ListNode* head, int k) {
        ListNode *curr = head;
        vector<ListNode*> res;

        int numberOfNodes = getNumberOfNodes(curr);
        for (int i = 0; i < k; i++) {
            int nbPerGroup = ceil(static_cast<double>(numberOfNodes) / static_cast<double>(k-i));

            res.push_back(curr);

            int j = 0;
            while (curr != nullptr && j < nbPerGroup-1) {
                j++;
                curr = curr->next;
                numberOfNodes--;
            }
            if (curr) {
                ListNode *prev;
                prev = curr;
                curr = curr->next;
                numberOfNodes--;
                prev->next = nullptr;
            }
            
        }
        
        return res;
    }

    int getNumberOfNodes(ListNode* head) {
        int count = 0;
        ListNode *curr = head;
        while (curr != nullptr) {
            count++;
            curr = curr->next;
        }
        return count;
    }
};