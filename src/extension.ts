import * as vscode from "vscode";
import { GetInsertPosition, insertLogMessage } from './insertLogMessage';
import { commentAllLogMessages, deleteAllLogMessages, uncommentAllLogMessages } from './modifyAllLogMessages';

export function activate(context: vscode.ExtensionContext) {
	const insertLogMessageDisposable = vscode.commands.registerCommand(
		"automaticprogrammaticsupersonicconsolelog.insertLogMessage",
		insertLogMessage
	);

	const getInsertPositionBelow: GetInsertPosition = (_: vscode.TextDocument, startLine: number): vscode.Position => new vscode.Position(startLine + 1, 0);
	const insertLogMessageBelowDisposable = vscode.commands.registerCommand(
		"automaticprogrammaticsupersonicconsolelog.insertLogMessageDirectlyBelow",
		() => insertLogMessage(getInsertPositionBelow)
	);

	const commentAllLogMessagesDisposable = vscode.commands.registerCommand(
		"automaticprogrammaticsupersonicconsolelog.commentAllLogMessages",
		commentAllLogMessages
	);

	const uncommentAllLogMessagesDisposable = vscode.commands.registerCommand(
		"automaticprogrammaticsupersonicconsolelog.uncommentAllLogMessages",
		uncommentAllLogMessages
	);

	const deleteAllLogMessagesDisposable = vscode.commands.registerCommand(
		"automaticprogrammaticsupersonicconsolelog.deleteAllLogMessages",
		deleteAllLogMessages
	);

	context.subscriptions.push(insertLogMessageBelowDisposable);
	context.subscriptions.push(insertLogMessageDisposable);
	context.subscriptions.push(commentAllLogMessagesDisposable);
	context.subscriptions.push(uncommentAllLogMessagesDisposable);
	context.subscriptions.push(deleteAllLogMessagesDisposable);
}
