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
    void printListNode(ListNode* head) {
        ListNode* p = head;
        while (p != nullptr) {
            cout << p->val << " ";
            p = p->next;
        }
    }
    ListNode* swapPairs(ListNode* head) {
        if (head == nullptr || head->next == nullptr)
            return head;

        ListNode* p1 = head;
        ListNode* p2 = head->next;
        ListNode* tail = new ListNode();

        head = p2;

        while (p1 != nullptr && p2 != nullptr) {

            tail->next = p2;
            p1->next = p2->next;
            p2->next = p1;

            tail = p1;
            p1 = tail->next;
            if (p1 != nullptr) {
                p2 = p1->next;
            } else {
                p2 = nullptr;
            }
        }
        
        return head;
    }
};